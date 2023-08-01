<template>
  <div>
    <h2>Roles</h2>
    <ul>
      <li v-for="role in roles" :key="role.id">
        {{ role.name }}
        <button @click="editRole(role)">Edit</button>
        <button @click="deleteRole(role.id)">Delete</button>
      </li>
    </ul>

    <h2>Create Role</h2>
    <form @submit.prevent="createRole">
      <input type="text" v-model="newRoleName" placeholder="Role name" required />
      <button type="submit">Create</button>
    </form>

    <h2>Edit Role</h2>
    <form v-if="editingRole" @submit.prevent="updateRole">
      <input type="text" v-model="editingRole.name" placeholder="Role name" required />
      <button type="submit">Update</button>
      <button type="button" @click="cancelEdit">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: [],
      newRoleName: '',
      editingRole: null,
    };
  },
  mounted() {
    this.fetchRoles();
  },
  methods: {
    fetchRoles() {
      this.$axios.get('/roles')
        .then((response) => {
          this.roles = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    createRole() {
      this.$axios.post('/roles', { name: this.newRoleName })
        .then((response) => {
          if (response.status === 201) {
            this.newRoleName = '';
            this.fetchRoles();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    editRole(role) {
      this.editingRole = { ...role };
    },
    updateRole() {
      this.$axios.put(`/roles/${this.editingRole.id}`, { name: this.editingRole.name })
        .then((response) => {
          if (response.status === 201) {
            this.editingRole = null;
            this.fetchRoles();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteRole(roleId) {
      this.$axios.delete(`/roles/${roleId}`)
        .then(() => {
          this.fetchRoles();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    cancelEdit() {
      this.editingRole = null;
    },
  },
};
</script>