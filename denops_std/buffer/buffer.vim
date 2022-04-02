if exists('g:loaded_denops_std_buffer_v1')
  finish
endif
let g:loaded_denops_std_buffer_v1 = 1

function! DenopsStdBufferV1Reload(bufnr) abort
  if bufnr('%') is# a:bufnr
    edit
    return
  endif
  let winid_saved = win_getid()
  let winid = bufwinid(a:bufnr)
  if winid is# -1
    augroup denops_std_buffer_v1_reload_internal
      execute printf('autocmd! * <buffer=%d>', a:bufnr)
      execute printf('autocmd BufEnter <buffer=%d> ++nested ++once edit', a:bufnr)
    augroup END
    return
  endif
  keepjumps keepalt call win_gotoid(winid)
  try
    edit
  finally
    keepjumps keepalt call win_gotoid(winid_saved)
  endtry
endfunction

function! DenopsStdBufferV1Replace(bufnr, repl) abort
  let modified = getbufvar(a:bufnr, '&modified')
  let modifiable = getbufvar(a:bufnr, '&modifiable')
  let foldmethod = getbufvar(a:bufnr, '&foldmethod')
  call setbufvar(a:bufnr, '&modifiable', 1)
  call setbufvar(a:bufnr, '&foldmethod', 'manual')
  call setbufline(a:bufnr, 1, a:repl)
  call deletebufline(a:bufnr, len(a:repl) + 1, '$')
  call setbufvar(a:bufnr, '&modified', modified)
  call setbufvar(a:bufnr, '&modifiable', modifiable)
  call setbufvar(a:bufnr, '&foldmethod', foldmethod)
endfunction

function! DenopsStdBufferV1ConcreteRestore() abort
  if !exists('b:denops_std_buffer_v1_concrete_cache')
    return
  endif
  call DenopsStdBufferV1Replace(bufnr('%'), b:denops_std_buffer_v1_concrete_cache.content)
  let &filetype = b:denops_std_buffer_v1_concrete_cache.filetype
endfunction

function! DenopsStdBufferV1ConcreteStore() abort
  let b:denops_std_buffer_v1_concrete_cache = {
        \ 'filetype': &filetype,
        \ 'content': getline(1, '$'),
        \}
endfunction
