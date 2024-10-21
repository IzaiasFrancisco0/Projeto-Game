import './Form.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Form() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [modal, setModal] = useState(false); // Estado para alternar entre os formulários

  const navigate = useNavigate();

  // Carrega o valor do Local Storage para o cadastro
  useEffect(() => {
    if (modal) {
      const stNome = localStorage.getItem('nomeCadastro');
      const stEmail = localStorage.getItem('emailCadastro');
      const stSenha = localStorage.getItem('senhaCadastro');

      if (stNome) setNome(stNome);
      if (stEmail) setEmail(stEmail);
      if (stSenha) setSenha(stSenha);
    }
  }, [modal]); // Carrega os dados apenas ao ativar o modal (formulário de cadastro)

  // Lida com a mudança de input de email, senha e nome
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'senha') {
      setSenha(value);
    } else if (name === 'nome') {
      setNome(value);
    }
  };

  // Salva os dados de cadastro no Local Storage
  const handleCadastroSubmit = (event) => {
    event.preventDefault();
    if (!nome || !email || !senha) {
      alert('Preencha todos os campos para se cadastrar');
      return;
    }

    localStorage.setItem('nomeCadastro', nome);
    localStorage.setItem('emailCadastro', email);
    localStorage.setItem('senhaCadastro', senha);
    alert('Cadastro realizado com sucesso!');

    // Limpa os campos e volta para o login
    setNome('');
    setEmail('');
    setSenha('');
    setModal(false); // Volta para o formulário de login
  };

  // Verifica o login com os dados salvos no Local Storage
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const storedEmail = localStorage.getItem('emailCadastro');
    const storedSenha = localStorage.getItem('senhaCadastro');

    if (email === storedEmail && senha === storedSenha) {
      alert('Login realizado com sucesso!');
      navigate('/blank'); // Redireciona após login
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  // Alterna para o formulário de cadastro
  const cadastreSe = (event) => {
    event.preventDefault();
    setModal(true); // Ativa o estado de modal para mostrar o formulário de cadastro
  };

  return (
    <div>
      {modal ? (
        // Formulário de Cadastro
        <form className="formulario" onSubmit={handleCadastroSubmit}>
          <h1>Cadastro</h1>
          <label>Digite seu Nome</label>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={handleInputChange}
          />
          <label>Digite seu Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <label>Digite sua Senha</label>
          <input
            type="password"
            name="senha"
            value={senha}
            onChange={handleInputChange}
          />
          <button type="submit">Cadastrar</button>
        </form>
      ) : (
        // Formulário de Login
        <form className="formulario" onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <label>Digite seu Email</label>
          <input
            type="text"
            name="email"
            value={email} // Mantém o valor no estado
            onChange={handleInputChange}
          />
          <label>Digite sua Senha</label>
          <input
            type="password"
            name="senha"
            value={senha} // Mantém o valor no estado
            onChange={handleInputChange}
          />
          <button type="submit">Entrar</button>
          <button onClick={cadastreSe}>Se não tiver? Cadastre-se</button>
        </form>
      )}
    </div>
  );
}

