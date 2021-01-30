# Media Player

## Descrição

Um reprodutor de vídeo simples que você consegue pular abertura, clicar para ver o próximo 
video, além de salvar em cache local o minuto exato de onde você parou, mesmo que saia
do player de qualquer forma.

## Instalação

Para instalar siga esses passos

* **Clone do repositório no github** 

```git clone ```

* **Instalação das dependências**

> Se você ainda não tem o Node instalado em sua máquina, sugiro que instale [por aqui](https://nodejs.org/en/download/);

> Você pode instalar o Electron [por aqui](https://www.electronjs.org/docs/tutorial/quick-start);

Para instalar as dependências do projeto, após fazer o clone do mesmo, abra a pasta que foi gerada e rode:

```npm install``` com o npm, ou
```yarn``` com o yarn se preferir.

Isso irá fazer surgir a pasta node_modules com todas as dependências do projeto instaladas.

* **Configuração do caminho dos vídeos**

Verifique em .env.example o nome da variável de ambiente para configurar o caminho dos arquivos de vídeos que quer executar.
Crie um arquivo na raiz do projeto chamado .env e insira essa variável passando o caminho exato dos vídeos.
> Lembre-se que em sistemas Unix, o caminho deve ser nesse formato /home/path, já no Windows, deve ser c:\home\path.

> Para poster dos vídeos, baixe uma imagem em seu computador, coloque-a dentro de assets e renomeie para poster e altere em index.html na linha 160 a extensão dessa imagem que você baixou.

* **Execução do projeto**

Para executar o projeto, execute o comando:
```npm rum start``` ou
```yarn start```


## Como vai ser renderizado

![Preview](https://imagensrael.s3.amazonaws.com/MediaPLayer.PNG)