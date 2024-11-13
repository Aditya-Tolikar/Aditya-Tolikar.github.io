---
layout: base
title: GnuPG `gpg --list-keys` output breakdown
date: 2024-02-16 18:30:00
categories: cryptographic-tools gpg
author: ["Aditya Tolikar"]
---
<div markdown="1" class="content-tile">
# GnuPG `gpg --list-keys` output breakdown

`gpg --list-keys` or `gpg -k` or `gpg --list-public-keys` command will list keys out of the configured public keyrings, unless you add further arguments specifying keys.[1]

Here, you see an example output of 2 keys using `gpg --list-keys`:

~~~
pub   ed25519 2024-02-17 [SC]
      CN3987G39HRPHG86FOG9384G9T37G9873T38T94A
uid           [ultimate] Server (with stupid passphrase) <server@org>
sub   cv25519 2024-02-17 [E]

pub   rsa3072 2024-02-17 [SC] [expires: 2024-02-18]
      398H39VGE4FT8IWP9UE4G4E3PT95UHGTR5387H9J
uid           [ultimate] dsds (sldfks) <dsds@sdfs>
sub   rsa3072 2024-02-17 [E] [expires: 2024-02-18]
~~~


1. In the first line:
   1. `pub` implies public key [2]
   2. `ed25519` denotes the cryptography algorithm used for the key
      - In this case, [EdDSA](https://en.wikipedia.org/wiki/EdDSA) is used along with [Curve 25519](https://en.wikipedia.org/wiki/Curve25519) Elliptic curve.
         - To get this result using the `--batch` option, one would use.

      ~~~
               Key-Type: EdDSA
               Key-Curve: ed25519
      ~~~
            
   3. `2024-02-17` is the date of generation.
   4. `[SC]` denotes the Capabilities allowed to be used with this key.
      - S: sign
      - C: cert
      - A: auth
      - E: encrypt
2. The second line has a fingerprint of the key
3. In the third line:
   1. `uid` implies user id [2]
   2. `[ultimate]` tells the level of trust assigned to this key
      - Use `gpg --edit-key [key-id]` and in the shell, run the `trust` command followed by the trust level 1-5 to change this trust value.
   3. `"Server"` is the name of the entity this key belongs to
   4. `(with stupid passphrase)` is a comment that can be added when making the key.
   5. `<server@org>` -> server@org is the email address associated to the key
4. In the 4th line:
   1. `sub` implies subkey [2]
   2. `cv25519` is the cryptography algorithm of the subkey
   3. Following 2 fields are similar to what was in the first line.
5. In the next key, most things are similar, except the addition of an `[expires: 2024-02-18]` field telling when the given key will expire, after which it will be considered invalid.


[1]: https://www.gnupg.org/documentation/manuals/gnupg24/gpg.1.html
[2]: https://security.stackexchange.com/questions/141501/what-is-the-meaning-of-gnupgs-list-sigs-output

</div>
