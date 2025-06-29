### 🥑⚡ – Voltocado API

````markdown
# ⚡ Voltocado API

**Voltocado** é uma API REST desenvolvida com Spring Boot que realiza **análises de circuitos elétricos**, como:

- Cálculos baseados na **Lei de Ohm** (Tensão, Corrente, Resistência)
- Resolução de **sistemas lineares** para análise de **malhas elétricas**

O nome é uma fusão de **"Volt"** (tensão) com **"Avocado"** (abacate), trazendo leveza e identidade ao projeto.

---

## 🚀 Tecnologias Utilizadas

- Java 17+
- Spring Boot 3+
- Spring Web
- Spring Validation
- Lombok
- Swagger / OpenAPI
- (Opcional) Spring Data JPA + H2 ou MySQL

---

## 📁 Estrutura do Projeto

```bash
src/
└── main/
    └── java/
        └── com/weslley/voltocado/
            ├── controller/        # Endpoints REST
            ├── dto/              # Objetos de transferência de dados
            ├── service/          # Regras de negócio
            ├── util/             # Utilitários matemáticos
            ├── model/            # Representações do domínio (Ex: EquationSystem)
            └── exception/        # Tratamento de erros e exceções
````

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/voltocado.git
cd voltocado
```

2. Importe no IntelliJ, Eclipse ou qualquer IDE Java com suporte a Maven/Gradle.

3. Execute o projeto com:

```bash
./mvnw spring-boot:run
```

---

## 🔌 Endpoints da API

### 1. 📐 Lei de Ohm

**POST** `/api/ohm`

Calcula um valor com base em dois dos três: tensão, corrente ou resistência.

#### 📤 Requisição

```json
{
  "tensao": 12,
  "corrente": 2
}
```

#### 📥 Resposta

```json
{
  "tensao": 12.0,
  "corrente": 2.0,
  "resistencia": 6.0
}
```

---

### 2. 🔁 Análise de Malhas

**POST** `/api/malhas`

Resolve um sistema linear de equações representando as malhas do circuito.

#### 📤 Requisição

```json
{
  "coeficientes": [
    [10, 5],
    [5, 15]
  ],
  "fontes": [20, 30]
}
```

#### 📥 Resposta

```json
{
  "correntes": [1.0, 1.5]
}
```

> O endpoint usa eliminação de Gauss para encontrar as correntes nas malhas.

---

## 🧪 Testando via Swagger

Com o projeto rodando, acesse:

```
http://localhost:8080/swagger-ui/index.html
```

Lá você poderá testar todos os endpoints com interface gráfica interativa.

---

## ⚠️ Tratamento de Erros

### Exemplo de resposta para entrada incompleta:

```json
{
  "timestamp": "2025-06-21T15:47:12",
  "status": 400,
  "error": "Invalid input",
  "message": "Informe pelo menos dois valores."
}
```

---

## 💡 Futuras melhorias

* Persistência de análises realizadas
* Autenticação via token (JWT)
* Exportação de análises em PDF
* Histórico por usuário

---

## 🧑‍💻 Autor

Desenvolvido por **Weslley Henrique Vieira Ferraz**
[LinkedIn](https://linkedin.com/in/weslley-henrique-vieira-ferraz-8b95b3127)
[GitHub](https://github.com/weslley281)
Site pessoal: [engenheirosoftwareweslley.com.br](https://engenheirosoftwareweslley.com.br)

---

## ⚖️ Licença

Este projeto está sob a licença MIT.

```