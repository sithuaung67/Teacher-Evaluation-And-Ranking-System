<template>
  <b-jumbotron header="Teachers" >
    <!-- Create Table For Teachers -->
    <b-table striped hover dark small responsive :items="teachers" :fields="table_fields" caption-top>
      <!-- the text above the table -->
      <template slot="table-caption">
        List of all teachers
      </template>
      <!-- The First Column of the table -->
      <template slot="index" slot-scope="data">
        {{data.index + 1}}
      </template>
      <!-- Button For Showing Modal -->
      <template slot="Handled_Subjects" slot-scope="data">
        <b-btn v-b-modal.teacherSubjectsModal >Show Subjects</b-btn>
      </template>
    </b-table>

    <!-- Modal >> Shows List of Teacher's handled Subjects -->
    <b-modal id="teacherSubjectsModal" centered title="Teacher Title">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </b-jumbotron>
</template>

<script>
export default {
  // User must be authenticated to access this Component
  middleware: 'auth',

  // Component name
  name: 'Teacher',

  // Data for this component
  data: () => ({

    // Fields in Teachers Table
    table_fields: [
      {key:'index',label:'#'},
      'Name',
      'Section_Advisory',
      'years_of_Service',
      'Handled_Subjects'
    ],

    // Data inside Teachers Table
    teachers: [
      {'Name':"Joseph Estrada",'Section_Advisory':10,'years_of_Service': 7, 'Handled_Subjects': "/JosephEstrada/Subjects"}
    ]

  }),
  method: {

  }
}
</script>

<style scoped>

</style>
