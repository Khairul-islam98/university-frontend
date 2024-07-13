import React from 'react';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { FieldValues, useForm } from 'react-hook-form';
import { verifyToken } from '../utils/verifyToken';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
    const dispath = useAppDispatch();
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [login] = useLoginMutation()

    const onSubmit = async(data: FieldValues) => {
      const toastId = toast.loading('Loading...');
      try{
        const userInfo = {
            id: data.userId,
            password:  data.password
        }
        const res =  await login(userInfo).unwrap();
        console.log(res);
        const user = verifyToken(res.data.accessToken) as TUser
        console.log(user);
        dispath(setUser({user: user, token: res.data.accessToken}))
        toast.success('Logged in', { id: toastId, duration: 2000 });
        navigate(`/${user.role}/dashboard`)
      }catch(err){
        toast.error('Something went wrong', { id: toastId, duration: 2000 });
      }
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div >
          <label htmlFor="id">ID: </label>
          <input  type="text" id="id" {...register('userId')} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" id="password" {...register('password')} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
      </div>
    );
};

export default Login;