import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import '../../styles/Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Crear una instancia de navigate

    const handleNavigate = () => {
        navigate('/register')
    }

    const handleLoginClick = () => {
        navigate('/profile');  // Redirige a la ruta /profile
      };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/usuarios/login', { email, password });
            console.log(response.data);

            // Manejar respuesta exitosa
            // Aquí puedes almacenar el token o realizar otras acciones necesarias

            // Redirigir a la página de inicio
            navigate("/"); // Redirigir a la página de inicio
        } catch (error) {
            Swal({
                title: 'Error',
                text: 'Correo o contraseña incorrectos',
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Entendido',
                        value: true,
                        visible: true,
                        className: "swal-button",
                        closeModal: true
                    }
                }
            });
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleLogin}>
                <h2>Iniciar Sesión</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                />
                <button onClick={handleLoginClick} type="submit">Iniciar Sesión</button>
                <button onClick={handleNavigate} type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Login;