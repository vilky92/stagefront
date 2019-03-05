<template>
<div>
  <table id="employees">
    <thead>
      <tr>
        <th v-for="(prop, p) in employeeProps" :key="p">{{prop}}</th>
        <th>modifier</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(prop, p) in employees" :key="p">
        <td v-for="(employeeValue, n) in prop" :key="n">{{employeeValue}}</td>
        <td><button class="btn" type="chekbox" @click="updateEmployee(prop)"></button></td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      employees: [],
      employee: {
        id: null,
        login: "",
        passwordHash: "",
        mail: "",
        lastname: "",
        firstname: "",
        organization: "",
        city: ""
      }
    };
  },
  computed: {
    employeeProps() {
      return this.employees[0] ? Object.keys(this.employees[0]) : [];
    }
  },
  mounted() {
    axios.get("http://localhost:8181/admin/getAll")
          .then(res => {
            console.log("sucess", res);
          this.employees = res.data;
          console.log(res.data);
          })
          .catch(err => {
            console.log("error", err);
          })
  },

  methods: {

      updateEmployee(employeeValue) {
       axios.put("http://localhost:8181/admin/put", employeeValue).then(
        response => {
          console.log("sucess", response);
        }),
        response => {
          console.log("erreur", response);
       }
      }
  }
};
</script>

<style lang="scss" scoped>
#employees {
  border-collapse: collapse;
  td,
  th {
    border: 1px solid;
    padding: 10px;
  }
}

.btn{
  margin-left: 12%;
  width: 75%;
  height: 50px;
  background: #1F72e2;
}

.btn:hover {
  background: #e5e9ed;
  border-color:  #1F72e2;
}
</style>
