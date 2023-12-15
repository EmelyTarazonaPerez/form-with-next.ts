'use client'
import React, { useState } from 'react';
import { dtoUser } from '../lib/definitions';
import ComponentInput from './input';
import { updateUser } from '../lib/data';
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SchemaUpdatePerfil } from '../lib/formSchema';

export default function ReusableForm({
  labelForm,
  dataUser,
  nameForm,
}: {
  labelForm: string[],
  dataUser: dtoUser,
  nameForm: string
}) {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<dtoUser>({
    defaultValues: dataUser,
    resolver: zodResolver(SchemaUpdatePerfil)
  })

  const [stateValueInput, setStateValueInput] = useState(dataUser)

  const onSubmit: SubmitHandler<dtoUser> = (data) => console.log(data)


  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1>{nameForm}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          Object.values(dataUser).map((item, index) =>
            <div className='container-input' key={item}>
              <ComponentInput
                item={item}
                labelForm={labelForm[index]}
                register={register}
                errors={errors}
                isSubmitting={isSubmitting}
              />
            </div>
          )
        }
        <button
          disabled={isSubmitting}
          type='submit'
          style={{ border: '1px solid black' }}>enviar</button>
      </form>
    </main>
  );
}

function userForm<T>(arg0: { defaultValues: dtoUser; }): { register: any; handleSumit: any; formSatate: { errors: any; isSubmitting: any; }; watch: any; } {
  throw new Error('Function not implemented.');
}
