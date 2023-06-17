# Imagem base do PHP
FROM php:7.4-apache

# Diretório de trabalho
WORKDIR /var/www/html

# Instalação das dependências do PHP
RUN docker-php-ext-install pdo pdo_mysql

# Copiar os arquivos do aplicativo para o contêiner
COPY . /var/www/html

# Configuração do Apache
RUN a2enmod rewrite

# Configuração do PHP
COPY ./docker/php.ini /usr/local/etc/php/

# Instalação das dependências do Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instalação das dependências do aplicativo
RUN composer install --no-dev --optimize-autoloader

# Configuração do VirtualHost do Apache
COPY ./docker/vhost.conf /etc/apache2/sites-available/000-default.conf

# Configuração das permissões
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Porta exposta
EXPOSE 80

# Comando para iniciar o servidor Apache
CMD ["apache2-foreground"]
