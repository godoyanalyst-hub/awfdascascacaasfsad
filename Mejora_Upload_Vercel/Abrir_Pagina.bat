@echo off
title Servidor - Mejora Comunicaciones
cd /d "%~dp0"

:: Verificar si Node.js esta instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo =======================================================
    echo [ERROR] Node.js no fue detectado por Windows.
    echo =======================================================
    echo Si acabas de instalar Node.js, a veces Windows necesita que
    echo REINICIES LA COMPUTADORA para reconocerlo correctamente.
    echo Por favor reinicia tu PC y vuelve a intentarlo.
    echo =======================================================
    pause
    exit /b
)

:: Instalar dependencias si la carpeta node_modules no existe
if not exist "node_modules\" (
    echo =======================================================
    echo Instalando los archivos del proyecto por primera vez...
    echo Esto tardara un poco, por favor espera...
    echo =======================================================
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Ocurrio un error al instalar los archivos.
        pause
        exit /b
    )
)

echo =======================================================
echo Iniciando el servidor web...
echo =======================================================
start http://localhost:3000
call npm run dev
echo.
echo El servidor se ha detenido o ha ocurrido un error.
pause
