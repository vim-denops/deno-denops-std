if exists('g:loaded_denops_std_helper_echo')
  finish
endif
let g:loaded_denops_std_helper_echo = 1

function! DenopsStdHelperEcho(message) abort
  call timer_start(0, { -> s:echo(a:message) })
endfunction

function! s:echo(message) abort
  redraw | echo a:message
endfunction
