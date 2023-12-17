# VOIKKO JS EXPERIMENTS

## HOW TO RUN

- with wasm: `npm run wasm`
- without wasm: `npm run nowasm`

## BUILDING VOIKKO

```bash
# first install and activate emscripten
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install 3.1.34  # This seems to be around as old as latest voikko release
./emsdk activate 3.1.34
source "/home/azureuser/emsdk/emsdk_env.sh"

# initialize and build js voikko
cd ~
git clone https://github.com/voikko/corevoikko.git
cd corevoikko/libvoikko
./autogen.sh
js/configure.sh
wget https://www.puimula.org/htp/testing/voikko-snapshot-v5/dict.zip
unzip dict.zip
rm dict.zip

# without WASM version was build by adding to js/build.sh a flag: -sWASM=0

js/build.sh embed
```