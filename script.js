	
	
	 
	 
	 document.querySelector('form')
	 .addEventListener('submit',(e)=>{
		if(document.querySelector('.name').value ==''){
			alert('أكتب اسم المستخدم في github')
		}else{
			 myGithub(document.querySelector('.name').value)
		}
		 

		 e.preventDefault()
	 })
	 
	let table = document.querySelector('table tbody');

	 
	 
	 async function myGithub(name){
		 
		 try{
			 let https = await fetch(`https://api.github.com/users/${name}/repos`);
			let  arr = await https.json()

			
		
		console.log(arr[0])
		arr.forEach((e,index)=>{

			index = index + 1
			index = index  < 10 ? '0'+ index : index;
			
			let tr = `
				<tr> 
					<td>${index } </td>
					<td>${e.name} </td>
					<td><a href='https://m21wx.github.io/${e.name}'target='_blank'> link</a></td>
				</tr>
			`;
			table.innerHTML += tr;
		})
		
			 
		 }catch(e){
			alert('أسم المستخدم غير صحيح');
			window.location.reload();
		 }
		 
	 }
	 
	 

	 
	 
	 
	 