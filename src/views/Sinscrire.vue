<template>
    <div class="rectangles">
       <img  id="salariesconnexion" src="@/assets/images/wonderful_world.jpg" alt="bureau" role="img">
        <form id="formcontactes" method="post">
              <h1 class="titre"> Rejoignez notre Communaute</h1>
              <p class="slogan">Nous utiliserons ces informations pour vous proposer des évènements et des projets près de chez vous.</p>
              <p>{{message}}</p>
              <input class="nom" placeholder="  Votre Nom  "  required v-model="employee.lastname">
              <input class="prenom" placeholder="  Votre prenom  "   required v-model="employee.firstname">
              <input placeholder="  Votre pseudo  "  required v-model="employee.login">
              <input placeholder="  Votre adresse mail Capgemini  " type="email"  required v-model="employee.mail">
              <input type="password" placeholder="  mot de passe  "               required v-model="passwordOne">
              <input type="password" placeholder="  Veuillez confirmer votre mot de passe  " required v-model="passwordTwo">
             <select class="yes" name="titre" v-model="employee.idCity" required>
                <option value="ville" selected="selected">Ville</option>
                <option value="1">Paris</option>
                <option value="2">Marseille</option>
                <option value="3">Lyon</option>
              </select>
              <select class="yes2" name="titre" v-model="employee.idOrganization" required>
                <option value="organization" selected="selected">Entité</option>
                <option value="1">Buisness</option>
                <option value="2">Sogeti</option>
              </select>
              <button class="inscription" name="submit" type="submit" id="newcontactsubmit" data-submit="...Sending" @click="handleSubmit">
              <span>Inscription</span>
            </button>
        </form>  
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: null,
      msgCls: null,
      message: "",
      employees: [],
      passwordOne: "",
      passwordTwo: "",
      employee: {
        id: null,
        login: "",
        passwordHash: "",
        mail: "",
        lastname: "",
        firstname: "",
        idOrganization: null,
        idCity: null
      }
    };
  },
  methods: {
    displayMessage(msg, status) {
      if (!msg) return console.error(`the message is required !`);
      const possibleStatuses = ["success", "warning", "error"];
      if (possibleStatuses.includes(status)) {
        this.msgCls = status;
        this.msg = msg;
      } else console.warning(`${status} is not a valid css class for messages`);
    },

    createEmployee(employe) {
      console.log(this.employee);
      console.log(employe);
      axios.post("http://localhost:8181/ano/post", this.employee).then(
        response => {
          this.employees = response.data;
          console.log("sucess", response);
        }).catch((response) => {
          console.log("erreur", response);
        }
      );
    },

    password() {
      console.log("password")
        if(this.passwordOne === this.passwordTwo && this.passwordOne != null) {
            console.log("success password")
            this.employee.passwordHash = this.passwordOne
            return this.createEmployee(this.employee)
        }
        else {
            console.log("fail")

            return this.message = "mot de passe différent"
        }
    },
    handleSubmit(e) {
      e.preventDefault();
      if (
        !this.employee.login ||
        !this.employee.mail ||
        !this.employee.firstname ||
        !this.employee.lastname ||
        !this.employee.idCity ||
        !this.employee.idOrganization
      ) {
        console.log("error")
        return this.displayMessage(
          "Vous devez remplir tout les champs",
          "warning"
        );
      } else this.password();
      console.log("methode password");
    }
  }
};
</script>
<style lang="scss" scoped>
.rectangles{
  display: flex;
  position: relative;
}
#salariesconnexion{
  background-size: cover;
  width: 2400px;
  height: 1800px;
  max-height: 100vh;
  max-width: 100%;
  position: relative;
 
  
}
#formcontactes{
 display: flex;
    position:relative;
    width: 720px;
    height: 1100px;
    flex-direction: column;
     background-color: rgba(255, 255, 255, 0.94);
    margin-left: -720px;
    margin-bottom: 88px;
    padding-top: 50px;
    padding-left: 90px;
    padding-right: 90px;
    
}
  
.titre{
color: #444444;
font-size: 19.8px;
} 
.slogan {
  color: #444444;
  height: 72px;
  width: 503px;
  font-size: 19.8px;
  margin-bottom: 35px;
}
input{
height: 65px;
width: 511px;
margin-bottom: 36px;
}

button{
height: 65px;
width: 511px;
color:white ;
background-color: #0078e1;
border: none;
}

.yes {
  width: 95%;
  height: 65px;
}
.yes2 {
  margin-top: 35px;
  width: 95%;
  height: 65px;
}

.inscription {
  margin-top: 35px;
}
</style>