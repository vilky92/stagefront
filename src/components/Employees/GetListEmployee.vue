<template>
  <table id="employees">
    <thead>
      <tr>
        <th v-for="(prop, p) in employeeProps" :key="p">{{prop}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(prop, p) in employees" :key="p">
        <td v-for="(employee, n) in prop" :key="n">{{employee}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      employees: []
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
          })
          .catch(err => {
            console.log("error", err);
          })
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
</style>
