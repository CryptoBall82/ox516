# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{pkgs}: {
  # Which nixpkgs channel to use.
  channel = "stable-24.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.aws-sam-cli
    pkgs.bun
    pkgs.ruby
    pkgs.bundler # Corrected from your previous log, ensure this is bundler
    pkgs.jdk17
    pkgs.gcc
    pkgs.gnumake
    pkgs.curl
    pkgs.android-tools 
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "amazonwebservices.amazon-q-vscode"
      "amazonwebservices.aws-toolkit-vscode"
      "anyscalecompute.anyscale-workspaces"
      "bradlc.vscode-tailwindcss"
      "Dart-Code.dart-code"
      "golang.go"
      "ms-vscode.js-debug"
      "PKief.material-icon-theme"
      "redhat.java"
      "redhat.vscode-yaml"
      "ritwickdey.LiveServer"
      "vscjava.vscode-gradle"
      "vscjava.vscode-java-debug"
      "vscjava.vscode-java-dependency"
      "vscjava.vscode-java-pack"
      "vscjava.vscode-java-test"
      "vscjava.vscode-maven"
      "msjsdiag.vscode-react-native"
      "react-native-directory.vscode-react-native-directory"
      "Tomi.xajssnippets"
      "Tomi.xasnippets"
      "swmansion.react-native-ide"
    ];
    workspace = {
      onCreate = {
        default.openFiles = [
          "src/app/page.tsx"
        ];
      };
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web";
        };
        android = { # <--- ADDED ANDROID PREVIEW CONFIGURATION
          manager = "android";
        };        # <--- END OF ADDED ANDROID PREVIEW CONFIGURATION
      };
    };
  };
}