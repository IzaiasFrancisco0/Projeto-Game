import './Suporte.css';
import React, { useRef, useState, useEffect } from 'react';

export default function Suporte() {
  const [selecionarImage, setSelecionarImage] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const arquivoInputRef = useRef(null);

  const handleClick = () => {
    if (arquivoInputRef.current) {
      arquivoInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setSelecionarImage(imageData); // Define a imagem no estado
        localStorage.setItem('imagemSelecionada', imageData); // Salva a imagem no localStorage
      };
      reader.readAsDataURL(file); // Converte a imagem para base64
    }
  };

  const dadosLocal = () => {
    const getNome = localStorage.getItem('nomeCadastro');
    const getEmail = localStorage.getItem('emailCadastro');
    const getSenha = localStorage.getItem('senhaCadastro');
    const imagemSalva = localStorage.getItem('imagemSelecionada'); // Recupera a imagem

    if (getNome) setNome(getNome);
    if (getEmail) setEmail(getEmail);
    if (getSenha) setSenha(getSenha);
    if (imagemSalva) setSelecionarImage(imagemSalva); // Define a imagem recuperada
  };

  // Função para mascarar a senha
  const mascararSenha = (senha) => {
    if (senha.length > 4) {
      return '*'.repeat(senha.length - 4) + senha.slice(-4);
    }
    return senha; // Se a senha tiver 4 ou menos caracteres, não mascara
  };

  useEffect(() => {
    dadosLocal(); // Carrega os dados ao montar o componente
  }, []);

  return (
    <div className="suporte">
      <div className="info-card">
        <div className="foto" onClick={handleClick}>
          {selecionarImage ? (
            <img src={selecionarImage} alt="selected" />
          ) : (
            <span>Clique em adicionar uma foto</span>
          )}

          <input
            type="file"
            accept="image/*"
            ref={arquivoInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
        <div className="info-geradas">
          <h3>Dados Cadastrados</h3>
          <p>Nome: <span>{nome}</span></p>
          <p>Email: <span>{email}</span></p>
          <p>Senha: <span>{mascararSenha(senha)}</span></p> {/* Usa a função para mascarar */}
        </div>
      </div>
    </div>
  );
}
