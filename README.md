RBEnv for Node
--------------

## Installation

### Basic Homebrew Install

If you're on Mac OS X, consider
[installing with Homebrew](#homebrew-on-mac-os-x).

1. Install using brew command

    ~~~ sh
    $ brew install https://raw.github.com/johnlayton/farmclose/master/jsenv.rb
    ~~~

2. Upgrade using brew command

    ~~~ sh
    $ brew upgrade https://raw.github.com/johnlayton/farmclose/master/jsenv.rb
    ~~~

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

5. `jsenv install` command that simplifies the process of
   [installing new Node versions](#installing-node-versions).

### Installing Node Versions

The `jsenv install` command ships with jsenv out of the box. If you 
installed it either as part of GitHub checkout process outlined above 
or via Homebrew, you should be able to:

~~~ sh
# install a Node version:
$ jsenv install node 0.10.26

# install an IoJS version:
$ jsenv install iojs 2.2.1
~~~

Alternatively to the `install` command, you can download and compile
Node manually as a subdirectory of `~/.jsenv/versions/`. An entry in
that directory can also be a symlink to a Node version installed
elsewhere on the filesystem. jsenv doesn't care; it will simply treat
any entry in the `versions/` directory as a separate Node version.

### Uninstalling Node Versions

As time goes on, Node versions you install will accumulate in your
`~/.jsenv/versions` directory.

To remove old Node versions, simply `rm -rf` the directory of the
version you want to remove. You can find the directory of a particular
Node version with the `jsenv prefix` command, e.g. `jsenv prefix 0.10.26`.
