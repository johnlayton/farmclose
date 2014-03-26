## Installation

If you're on Mac OS X, consider
[installing with Homebrew](#homebrew-on-mac-os-x).

```
brew install https://raw.github.com/johnlayton/farmclose/master/jsenv.rb
```

### Basic GitHub Checkout

This will get you going with the latest version of jsenv and make it
easy to fork and contribute any changes back upstream.

1. Check out jsenv into `~/.jsenv`.

    ~~~ sh
    $ git clone https://github.com/johnlayton/farmclose.git ~/.jsenv
    ~~~

2. Add `~/.jsenv/bin` to your `$PATH` for access to the `jsenv`
   command-line utility.

    ~~~ sh
    $ echo 'export PATH="$HOME/.jsenv/bin:$PATH"' >> ~/.bash_profile
    ~~~

    **Ubuntu Desktop note**: Modify your `~/.bashrc` instead of `~/.bash_profile`.

    **Zsh note**: Modify your `~/.zshrc` file instead of `~/.bash_profile`.

3. Add `jsenv init` to your shell to enable shims and autocompletion.

    ~~~ sh
    $ echo 'eval "$(jsenv init -)"' >> ~/.bash_profile
    ~~~

    _Same as in previous step, use `~/.bashrc` on Ubuntu, or `~/.zshrc` for Zsh._

4. Restart your shell so that PATH changes take effect. (Opening a new
   terminal tab will usually do it.) Now check if jsenv was set up:

    ~~~ sh
    $ type jsenv
    #=> "jsenv is a function"
    ~~~

5. _(Optional)_ Install [ruby-build][], which provides the
   `jsenv install` command that simplifies the process of
   [installing new Node versions](#installing-node-versions).
