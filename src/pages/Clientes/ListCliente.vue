<template lang="html">
<div class= "container">
	<div class = "row">
		<div class= "col text-left">
			<div class="">
				<h2>Listado de Usuarios</h2>
				<div class="col-sm-12">
                    <input type="text" placeholder="Buscar por nombre o por correo" name="nombre" class="form-control" >
                </div>

			</div>
		<br>
		<div class="col-md-12">
			<b-table striped hover :items="admin":fields="fields">
				<template v-slot:cell(action)="data">
    				<b-button size="sm" variant="primary">Bloquear</b-button>
    				<b-button size="sm" variant="danger">Eliminar</b-button>
				</template>
			</b-table>
		</div>


		</div>
	</div>
</div>
</template>

<script>

import axios from 'axios';

export default {
	data(){
		return{
			fields: [
				{ key: 'nombre', sortable: true, label: 'Nombre'},
                { key: 'cedula', label: 'Cedula'},
				{ key: 'correo', label: 'Correo'},
				{ key: 'idrolusuario', label: 'Rol'},
				{ key: 'action', label: ''}				

			],
			admin: [

            ]
		}
	},
	methods: {

		getAdmins () {

			const path = 'http://127.0.0.1:8000/usr/usuarios/'
			axios.get(path).then((response) => {
                for(const userInfo of response.data){
                    if(`${userInfo.idrolusuario}` === "2"){
                        this.admin.push(userInfo)                        
                    }
                }
				
			})
			.catch((error) => {
				console.log(error)
			})
		}
	},
	created(){
		this.getAdmins()
	}
}
</script>

<style lang="css" scoped>
</style>