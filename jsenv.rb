require 'formula'

class Jsenv < Formula
  homepage ''
  url 'https://github.com/johnlayton/farmclose/raw/master/dist/jsenv-0.0.11.tar.gz'
  sha1 '1de4fb407bc4256c90a61f4dcafda091782ce5ce'

  def install
    inreplace 'libexec/jsenv', '/usr/local', HOMEBREW_PREFIX
    prefix.install Dir['*']
  end

  def caveats; <<-EOS.undent
    To use Homebrew's directories rather than ~/.jsenv add to your profile:
    export JSENV_ROOT=#{var}/jsenv

    To enable shims and autocompletion add to your profile:
      if which jsenv > /dev/null; then eval "$(jsenv init -)"; fi
  EOS
  end

end