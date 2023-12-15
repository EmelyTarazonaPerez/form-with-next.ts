import { z } from 'zod'
import  validator  from 'validator'

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const SchemaUpdatePerfil = z.object({
    name: z.string().min(1, {message: 'EL nombre es requerido'}).max(100),
    username: z.string().min(1, {message: 'EL username es requerido'}).max(100),
    email: z.string().email({message:'El correo electronico es requerido'}),
    phone: z.string().length(10).regex(phoneRegex, 'Invalid Number'),
    website: z.string().min(1,{message:'El website electronico es requerido'}).max(100),
})  
