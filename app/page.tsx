
import React  from 'react';
import { getUser } from './lib/data';
import { dtoUser } from './lib/definitions';
import ReusableForm from './ui/form';

export default async function Page() {

  const dataUser: dtoUser = await getUser()
  const labelForm = Object.keys(dataUser)

  return (
    <main className="flex min-h-screen flex-col p-6">
      
      
      <ReusableForm 
        labelForm={labelForm}
        nameForm='Update your perfil' 
        dataUser={dataUser}/>
    </main>
  );
}
