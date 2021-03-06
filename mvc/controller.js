class Controller {

    constructor() {
        this.classCb = document.getElementsByClassName("cb");
        this.classRbSet = document.getElementsByClassName("rbSet");
        this.classRbConv = document.getElementsByClassName("rbConv");
        this.view = new View();
        this.saveSettings();
        this.loadSettings();
        //recall every 1000ms
        setInterval(() => {
            this.updateDisplay();
        }, 1000)
    }

    //save settings when clicked one of buttons
    saveSettings() {

        //store checkbox settings
        for (let i = 0; i < this.classCb.length; i++) {
            document.getElementById(this.classCb[i].id).addEventListener("click", () => {
                (document.getElementById(this.classCb[i].id).checked)
                    ? localStorage.setItem(`cbSetting${i}`, true)
                    : localStorage.setItem(`cbSetting${i}`, false);
            });
        }

        //store radiobtn settings
        for (let i = 0; i < this.classRbSet.length; i++) {
            this.classRbSet[i].addEventListener("click", () => {
                for (let i = 0; i < this.classRbSet.length; i++) {
                    (document.getElementById(this.classRbSet[i].id).checked)
                        ? localStorage.setItem(`rbSetting${i}`, true)
                        : localStorage.setItem(`rbSetting${i}`, false);
                }
            });
        }

        for (let i = 0; i < this.classRbConv.length; i++) {
            this.classRbConv[i].addEventListener("click", () => {
                for (let i = 0; i < this.classRbConv.length; i++) {
                    (document.getElementById(this.classRbConv[i].id).checked)
                        ? localStorage.setItem(`rbConv${i}`, true)
                        : localStorage.setItem(`rbConv${i}`, false);
                }
            });
        }
    }

    //visual settings (in)vis dec, bin, color highlight
    settings() {
        if (document.getElementById("hl").checked) {
            this.view.highlight();
        }

        if (!document.getElementById("01").checked) {
            this.view.invisBin();
        }

        if (!document.getElementById("dec").checked) {
            this.view.invisDec();
        }
    }
    //call Strategy-Factory
    updateDisplay() {
        let h24 = document.getElementById("24h").checked;
        for (let i = 0; i < this.classRbConv.length; i++) {
            if (document.getElementById(this.classRbConv[i].id).checked) {
                let strategy = new ConvertStrategy(new Factory().execConvert(this.classRbConv[i].id));
                document.getElementById("setTitle").innerHTML = document.getElementById(this.classRbConv[i].id).value;
                this.view.domView(strategy.start(new Clock().timeDate(h24)));
            }
        }
        this.settings();
    }

    loadSettings() {

        for (let i = 0; i < this.classCb.length; i++) {
            (localStorage.getItem(`cbSetting${i}`) !== null)
                ? document.getElementById(this.classCb[i].id).checked = JSON.parse(localStorage.getItem(`cbSetting${i}`))
                : document.getElementById(this.classCb[i].id).checked = true;
        }

        for (let i = 0; i < this.classRbSet.length; i++) {
            (localStorage.getItem(`rbSetting${i}`) !== null)
                ? document.getElementById(this.classRbSet[i].id).checked = JSON.parse(localStorage.getItem(`rbSetting${i}`))
                : document.getElementById(this.classRbSet[i].id).checked = true;
        }

        for (let i = 0; i < this.classRbConv.length; i++) {
            (localStorage.getItem(`rbConv${i}`) !== null)
                ? document.getElementById(this.classRbConv[i].id).checked = JSON.parse(localStorage.getItem(`rbConv${i}`))
                : document.getElementById(this.classRbConv[i].id).checked = true;
        }

    }

}