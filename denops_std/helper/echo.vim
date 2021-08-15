if exists('g:loaded_denops_std_helper_echo')
  finish
endif
let g:loaded_denops_std_helper_echo = 1

function! DenopsStdHelperEcho(message, name, id) abort
  let info = {}
  let info.t = timer_start(0, { -> feedkeys('jk', 'n') })
  let info.name = a:name
  let info.id = a:id
  let info.message = a:message
  let info.updatetime = &updatetime
  let &updatetime = 1
  let s:denops_std_helper_echo_info = info
  augroup denops_std_helper_echo
    autocmd!
    autocmd CursorHold * ++once call s:denops_std_helper_echo_post()
  augroup END
endfunction

function! s:denops_std_helper_echo_post() abort
  let info = s:denops_std_helper_echo_info
  silent! unlet! s:denops_std_helper_echo_info
  let &updatetime = info.updatetime
  call timer_stop(info.t)
  redraw | echo info.message
  call denops#request(info.name, info.id, [])
endfunction

