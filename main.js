Vue.createApp({
  data() {
    return {
      title: "Discloud on API",
      apiToken: "",
      status: "",
      status2: "",
      status3: "",
      buttonActive: false,
    };
  },
  methods: {
    upload(e) {
      this.buttonActive = true;
      e.preventDefault();

      const file = document.getElementById("file").files[0];

      if (file === undefined || this.apiToken === "") {
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
          "Content-Type": "multipart/form-data",
        },
      };

      this.status = "Uploading...";

      let url = "https://api.discloud.app/v2/upload";

      axios
        .post(url, formData, config)
        .then((response) => {
          this.buttonActive = false;
          this.status = response.data;
          alert(response.data.message);
        })
        .catch((error) => {
          this.buttonActive = false;
          this.status = error.response.data;
          alert(error.response.data.message);
        });
    },
    commit(e) {
      this.buttonActive = true;
      e.preventDefault();

      const file = document.getElementById("file").files[0];

      if (file === undefined || this.apiToken === "") {
        this.buttonActive = false;
        this.status = "Please fill all fields";
        alert("Please fill in all fields");
        return;
      }

      let botID = prompt("enter your application ID");

      if (!botID) {
        this.buttonActive = false;
        this.status = "You need to enter your application ID";
        alert("You need to enter your application ID");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      const config = {
        headers: {
          "api-token": this.apiToken,
          "Content-Type": "multipart/form-data",
        },
      };

      this.status = "Committing...";

      let url = `https://api.discloud.app/v2/app/${botID}/commit`;

      axios
        .put(url, formData, config)
        .then((response) => {
          this.buttonActive = false;
          this.status = response.data;
          alert(response.data.message);
        })
        .catch((error) => {
          this.buttonActive = false;
          this.status = error.response.data;
          alert(error.response.data.message);
        });
    },
    start(e) {
      this.buttonActive = true;
      e.preventDefault();

      if (this.apiToken === "") {
        this.buttonActive = false;
        this.status2 = "Please insert api token";
        alert("Please insert api token");
        return;
      }

      let botID = prompt("enter your application ID");

      if (!botID) {
        this.buttonActive = false;
        this.status2 = "You need to enter your application ID";
        alert("You need to enter your application ID");
        return;
      }

      const config = {
        headers: {
          "api-token": this.apiToken,
        },
      };

      this.status2 = "Starting...";

      let url = `https://api.discloud.app/v2/app/${botID}/start`;

      axios
        .put(url, {}, config)
        .then((response) => {
          this.buttonActive = false;
          this.status2 = response.data;
          alert(response.data.message);
        })
        .catch((error) => {
          this.buttonActive = false;
          this.status2 = error.response.data;
          alert(error.response.data.message);
        });
    },
    restart(e) {
      this.buttonActive = true;
      e.preventDefault();

      if (this.apiToken === "") {
        this.buttonActive = false;
        this.status2 = "Please insert api token";
        alert("Please insert api token");
        return;
      }

      let botID = prompt("enter your application ID");

      if (!botID) {
        this.buttonActive = false;
        this.status2 = "You need to enter your application ID";
        alert("You need to enter your application ID");
        return;
      }

      const config = {
        headers: {
          "api-token": this.apiToken,
        },
      };

      this.status2 = "Restarting...";

      let url = `https://api.discloud.app/v2/app/${botID}/restart`;

      axios
        .put(url, {}, config)
        .then((response) => {
          this.buttonActive = false;
          this.status2 = response.data;
          alert(response.data.message);
        })
        .catch((error) => {
          this.buttonActive = false;
          this.status2 = error.response.data;
          alert(error.response.data.message);
        });
    },
    stop(e) {
      this.buttonActive = true;
      e.preventDefault();

      if (this.apiToken === "") {
        this.buttonActive = false;
        this.status2 = "Please insert api token";
        alert("Please insert api token");
        return;
      }

      let botID = prompt("enter your application ID");

      if (!botID) {
        this.buttonActive = false;
        this.status2 = "You need to enter your application ID";
        alert("You need to enter your application ID");
        return;
      }

      const config = {
        headers: {
          "api-token": this.apiToken,
        },
      };

      this.status2 = "Stoping...";

      let url = `https://api.discloud.app/v2/app/${botID}/stop`;

      axios
        .put(url, {}, config)
        .then((response) => {
          this.buttonActive = false;
          this.status2 = response.data;
          alert(response.data.message);
        })
        .catch((error) => {
          this.buttonActive = false;
          this.status2 = error.response.data;
          alert(error.response.data.message);
        });
    },
    remove(e) {
      this.buttonActive = true;
      e.preventDefault();

      if (this.apiToken === "") {
        this.buttonActive = false;
        this.status3 = "Please insert api token";
        alert("Please insert api token");
        return;
      }

      let botID = prompt("enter your application ID");

      if (!botID) {
        this.buttonActive = false;
        this.status3 = "You need to enter your application ID";
        alert("You need to enter your application ID");
        return;
      }

      const config = {
        headers: {
          "api-token": this.apiToken,
        },
      };

      this.status3 = "Removing...";

      let url = `https://api.discloud.app/v2/app/${botID}/delete`;

      axios
        .delete(url, config)
        .then((response) => {
          this.buttonActive = false;
          this.status3 = response.data;
          alert(response.data.message);
        })
        .catch((error) => {
          this.buttonActive = false;
          this.status3 = error.response.data;
          alert(error.response.data.message);
        });
    },
  },
}).mount("#app");
