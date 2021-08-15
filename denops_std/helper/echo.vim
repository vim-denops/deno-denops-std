if exists('g:loaded_denops_std_helper_echo')
  finish
endif
let g:loaded_denops_std_helper_echo = 1

" Redraw debounce interval defined in denops.vim
" https://github.com/vim-denops/denops.vim/pull/90
let s:redraw_interval = 10

function! DenopsStdHelperEcho(message, name, id) abort
  let info = {}
  let info.name = a:name
  let info.id = a:id
  let info.message = a:message
  let info.updatetime = &updatetime
  let s:denops_std_helper_echo_info = info
  " Wait s:redraw_interval + alpha to avoid debounced
  " `redraw` call after RPC. See #77 for details.
  " https://github.com/vim-denops/deno-denops-std/issues/77
  let &updatetime = float2nr(ceil(s:redraw_interval * 1.5))
  " Reset Vim's internal timer for 'updatetime'
  call feedkeys('jk', 'n')
  augroup denops_std_helper_echo
    autocmd!
    autocmd CursorHold * ++once call s:denops_std_helper_echo_post()
  augroup END
endfunction

function! s:denops_std_helper_echo_post() abort
  let info = s:denops_std_helper_echo_info
  silent! unlet! s:denops_std_helper_echo_info
  let &updatetime = info.updatetime
  redraw | echo info.message
  call denops#request(info.name, info.id, [])
endfunction

