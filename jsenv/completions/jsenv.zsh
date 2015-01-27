if [[ ! -o interactive ]]; then
    return
fi

compctl -K _jsenv jsenv

_jsenv() {
  local words completions
  read -cA words

  if [ "${#words}" -eq 2 ]; then
    completions="$(jsenv commands)"
  else
    completions="$(jsenv completions ${words[2,-1]})"
  fi

  reply=("${(ps:\n:)completions}")
}
