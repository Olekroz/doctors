export function validateEmail (email: string):boolean {
        if(email.includes("@") && email.includes(".")) {
          return false;
        } else {
        return true;
        }
      }