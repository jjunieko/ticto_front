### Laravel + Next.js Readme
Este é um exemplo de um projeto que combina Laravel, Next.js e MySQL. Ele demonstra uma integração entre um backend em Laravel, fornecendo uma API para o frontend Next.js consumir, e um banco de dados MySQL para armazenamento de dados.

Requisitos
PHP >= 7.4
Laravel >= 8.0
Composer
Node.js >= 12.0
NPM >= 6.0
MySQL >= 5.7
Configuração
Clone o repositório para a sua máquina local:

```git clone <url-do-repositorio>```


Instale as dependências do Laravel usando o Composer:

cd laravel-backend
composer install

Copie o arquivo .env.example e renomeie para .env. Configure as informações do banco de dados no arquivo .env de acordo com as configurações do seu ambiente:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ticto_db
DB_USERNAME=root
DB_PASSWORD=

Execute as migrações para criar as tabelas no banco de dados:

php artisan migrate
php artisan serve

## FRONTEND

instal node js e npm

commando : npm install na raix do projeto front 

Configure as variáveis de ambiente do Next.js no arquivo .env.local. Certifique-se de definir a URL do backend Laravel corretamente

e rode npm run dev


## Despejo (dump) do MySQL
Caso deseje popular o banco de dados com dados de exemplo, você pode importar um despejo (dump) do MySQL. Certifique-se de ter o MySQL instalado e acessível no seu ambiente.

No terminal, navegue para o diretório raiz do projeto Laravel.

Execute o seguinte comando para importar o despejo (dump) para o banco de dados:
mysql -u your_database_username -p your_database_name < dump.sql


## Considerações Finais
Este é um exemplo básico de integração entre Laravel e Next.js com um banco de dados MySQL. Sinta-se à vontade para explorar e modificar o código de acordo com suas necessidades. Lembre-se de consultar a documentação oficial do Laravel e do Next.js para obter mais informações sobre como utilizar essas tecnologias.




