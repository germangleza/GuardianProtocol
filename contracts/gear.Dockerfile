LABEL description="Container to compile gear/vara smart-contracts" \
  maintainer="Danyiel Colin <danyiel5978@gmail.com>"

# Use a base image with a suitable operating system and package manager
FROM gcc:12.3

# Set a working directory for your application
WORKDIR /app

# Update the package list and install necessary dependencies
RUN apt-get update

# Verify the compiler's version
RUN gcc --version && g++ --version

# Get Ubuntu packages
RUN apt-get install -y build-essential \
  clang cmake curl jq

# Get Rust toolchain
RUN curl https://sh.rustup.rs -sSf | bash -s -- -y
RUN echo 'source $HOME/.cargo/env' >> $HOME/.bashrc
ENV PATH="$PATH:/root/.cargo/bin"

RUN rustup toolchain add nightly-2023-04-25
RUN rustup target add wasm32-unknown-unknown --toolchain nightly-2023-04-25
RUN cargo install --locked --git https://github.com/gear-tech/gear.git wasm-proc

RUN chmod -R +x /root/.cargo/bin

# Get the gear cli
RUN curl https://get.gear.rs/gear-nightly-x86_64-unknown-linux-gnu.tar.xz | tar xJ --directory /tmp
RUN mv /tmp/gear /bin

# Install the binaryen toolchain
RUN release_url="https://api.github.com/repos/WebAssembly/binaryen/releases/latest";\
 wget -qO - $release_url | jq .assets[2].browser_download_url | xargs wget -O /tmp/binaryen.tar.gz
RUN tar -xvf /tmp/binaryen.tar.gz --directory /tmp; cp /tmp/binaryen-version_*/bin/* /bin

# COPY . /app
CMD ["/bin/bash"]
