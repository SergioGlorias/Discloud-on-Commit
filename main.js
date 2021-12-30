Vue.createApp({
    data() {
        return {
            title: "Commit on Discloud",
            botID: "",
            apiToken: "",
            status: "",
            restart: false,
            buttonActive: false,
        }
    },
    methods: {
        commit(e) {
            this.buttonActive = true;
            e.preventDefault();

            const file = document.getElementById("file").files[0];

            if (file === undefined || this.botID === "" || this.apiToken === "") {
                this.buttonActive = false;
                this.status = "Please fill all fields";
                alert("Please fill in all fields");
                return;
            }

            const formData = new FormData();
            formData.append("file", file);

            const config = {
                headers: {
                    "api-token": this.apiToken,
                    "Content-Type": "multipart/form-data"
                }
            };

            this.status = "Committing...";

            let url
            if (this.restart) {
                url = `https://discloud.app/status/bot/${this.botID}/commit?restart=true`;
            } else {
                url = `https://discloud.app/status/bot/${this.botID}/commit`;
            }

            axios.post(url, formData, config)
                .then(response => {
                    this.buttonActive = false;
                    this.status = response.data.message;
                    alert(response.data.message);
                })
                .catch(error => {
                    this.buttonActive = false;
                    this.status = error.response.data.message;
                    alert(error.response.data.message);
                });
        }
    }
}).mount('#app')