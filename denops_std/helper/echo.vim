if exists('g:loaded_denops_std_helper_echo_v1')
  finish
endif
let g:loaded_denops_std_helper_echo_v1 = 1

function! DenopsStdHelperEchoV1(message) abort
  call timer_start(0, { -> s:echo(a:message) })
endfunction

function! s:echo(message) abort
  redraw | echo a:message
endfunction
