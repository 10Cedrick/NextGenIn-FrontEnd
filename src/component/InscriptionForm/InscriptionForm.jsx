import {useState} from 'react'
import {useForm} from 'react-hook-form'
import { Button, Form, Input, Checkbox  } from 'antd';
import { logoNext } from '../../assets';
import './InscriptionForm.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
export default function InscriptionForm() {
    const [form]  = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = () => {
    }
    const onCheck1 = () => {
    }
    const onCheck2 = () => {
    }
  return (
    
    <aside className='text-stone-900 w-1/2 h-screen px-16 pt-28 relative' >
        <div className='flex flex-row items-center text-[30px] absolute top-10'>
            <img src={logoNext} alt="" className='w-5 h-auto '/><span className='ml-2'>NextGen In</span>
        </div>
        <div className='mt-2'>
            <h1 className='text-[26px] text-slate-400 '>Bienvenue</h1>
        </div>
        <section className='mt-4'>
            <Form
            layout={formLayout} 
            onSubmit={handleSubmit(onSubmit)} action="" className='mt-4 w-3/4'>
                <div className='flex flex-col space-y-2 items-start'>
                    <label className='' htmlFor="">Votre nom</label>
                    <Input style={{height: '45px'}}
                     prefix={<UserOutlined className="text-slate-400 mt-[1px] mr-2 ml-1" />}
                     placeholder="ex: John Doe" id='#id'/>
                </div>
                <div className='flex flex-col space-y-2 items-start mt-4'>
                    <label className='' htmlFor="">Votre email</label>
                    <Input style={{height: '45px'}}
                    placeholder="ex: JohnDoe@gmail.com" id='#id'/>
                </div>
                <div className='flex flex-row space-x-7 mt-4'>
                    <div className='flex flex-col flex-1 space-y-2 items-start '>
                        <label
                        className='' htmlFor="">Créer un mot de passe</label>
                        <Input style={{height: '45px'}}
                        prefix={<LockOutlined className="text-slate-400 mt-[1px] mr-2 ml-1" 
                        />}/>
                    </div>
                    <div className='flex flex-col flex-1 space-y-2 items-start'>
                        <label className='' htmlFor="">Valider votre mot de passe</label>
                        <Input style={{height: '45px'}}
                        prefix={<LockOutlined className="text-slate-400 mt-[1px] mr-2 ml-1" />}
                        />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='flex flex-row space-x-1'><Checkbox onChange={onCheck1}>Oui j'accepte les termes d'utilisation</Checkbox></div>
                    <div className='flex flex-row space-x-1'><Checkbox onChange={onCheck2}>Souscrire à la newsletter de l'application</Checkbox></div>
                </div>
                <div className='mt-8'>
                    <Button htmlType="submit" size='large' className='px-8'>
                        S'inscrire
                    </Button>
                </div>
                <p className='text-[13px] mt-8 text-end text-slate-500'>Vous avez déjà un compte ? <a href="/login" className='underline text-blue-400'>Se connecter</a></p>

            </Form>
            
        </section>
    </aside>
  )
}
