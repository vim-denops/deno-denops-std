if exists('g:denops_std_helper_input_loaded')
  finish
endif
let g:denops_std_helper_input_loaded = 1

let s:escape_token = '###DenopsStdHelperInputCancelled###'

function! DenopsStdHelperInput(prompt, text, completion, inputsave) abort
  if type(a:completion) is# v:t_dict
    let s:completion = copy(a:completion)
    let completion = printf('customlist,%s', s:completion_proxy_name)
  else
    let completion = a:completion
  endif
  if a:inputsave
    call inputsave()
  endif
  try
    return s:input(a:prompt, a:text, completion)
  finally
    if a:inputsave
      call inputrestore()
    endif
  endtry
endfunction

function! s:completion_proxy(arglead, cmdline, cursorpos) abort
  return denops#request(
        \ s:completion.plugin,
        \ s:completion.id,
        \ [a:arglead, a:cmdline, a:cursorpos],
        \)
endfunction

if has('nvim')
  function! s:input(prompt, text, completion) abort
    let options = {
         \ 'prompt': a:prompt,
         \ 'default': a:text,
         \ 'cancelreturn': s:escape_token,
         \}
    if a:completion isnot# v:null
      let options['completion'] = a:completion
    endif
    let result = input(options)
    if result ==# s:escape_token
      return v:null
    endif
    return result
  endfunction
else
  function! s:input(prompt, text, completion) abort
    let original = maparg('<Esc>', 'n')
    execute printf('cnoremap <nowait><buffer> <Esc> <C-u>%s<CR>', s:escape_token)
    try
      let result = a:completion is# v:null
            \ ? input(a:prompt, a:text)
            \ : input(a:prompt, a:text, a:completion)
      redraw | echo ""
      if result ==# s:escape_token
        return v:null
      endif
      return result
    catch /^Vim:Interrupt$/
      return v:null
    finally
      if empty(original)
        cunmap <buffer> <Esc>
      else
        execute printf('cmap <buffer> %s', original)
      endif
    endtry
  endfunction
endif

let s:completion_proxy_name = get(funcref('s:completion_proxy'), 'name')
