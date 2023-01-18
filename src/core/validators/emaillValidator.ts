export default class onInput (event: any) {
        this.email=event.target.value;
        if(this.email.includes("@") && this.email.includes(".")) {
          this.emailError = false;
        } else {
        this.emailError = true;
        }
      }