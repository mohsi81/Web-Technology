        // Higher-order function
        function assistantController(actionCallback) {
            actionCallback();
        }

        // Function to route commands using switch
        function handleCommand() {
            const command = document.getElementById("commandSelect").value;

            switch (command) {
                case "greet":
                    assistantController(greetUser);
                    break;

                case "theme":
                    assistantController(changeTheme);
                    break;

                case "animate":
                    assistantController(startAnimation);
                    break;

                case "time":
                    assistantController(showTime);
                    break;

                case "reset":
                    assistantController(resetPage);
                    break;

                default:
                    document.getElementById("output").innerText =
                        "Please select a command.";
            }
        }

        // Callback functions
        function greetUser() {
            document.getElementById("output").innerText =
                "Hello! How can I assist you today?";
        }

        function changeTheme() {
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "#fff";
            document.getElementById("output").innerText =
                "Dark theme activated.";
        }

        function startAnimation() {
            const box = document.getElementById("box");
            box.style.transform = "rotate(360deg) scale(1.3)";

            setTimeout(() => {
                box.style.transform = "rotate(0deg) scale(1)";
            }, 500);

            document.getElementById("output").innerText =
                "Animation started.";
        }

        function showTime() {
            const time = new Date().toLocaleTimeString();
            document.getElementById("output").innerText =
                "Current time: " + time;
        }

        function resetPage() {
            location.reload();
        }