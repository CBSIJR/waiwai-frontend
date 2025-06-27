const PoliticaPrivacidade = () => {
    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
                Política de Privacidade
            </h1>
            <p style={{ marginBottom: "1rem" }}>
                Esta política descreve como coletamos, usamos e protegemos suas informações ao
                utilizar o Dicionário Waiwai.
            </p>
            <p style={{ marginBottom: "1rem" }}>
                Ao se cadastrar ou utilizar o site, você concorda com os termos desta política.
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginBottom: "1rem" }}>
                <li>Coletamos dados básicos como nome e e-mail apenas para fins de autenticação.</li>
                <li>Não compartilhamos seus dados com terceiros.</li>
                <li>Seus dados são protegidos com boas práticas de segurança digital.</li>
            </ul>
            <p>
                Em caso de dúvidas, entre em contato com a equipe de suporte do projeto.
            </p>
        </div>
    );
};

export default PoliticaPrivacidade;
