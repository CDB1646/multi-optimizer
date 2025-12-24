@echo off
:: Change directory to script location to avoid System32 error
cd /d "%~dp0"
echo Ultimate Optimizer EXE Olusturuluyor...

:: PyInstaller calistiriliyor
pyinstaller --noconsole --onefile ^
    --icon="UI/app_icon.ico" ^
    --add-data "UI;UI" ^
    --add-data "style.qss;." ^
    --add-data "Version.json;." ^
    --name "UltimateOptimizer" ^
    main.py

echo.
echo Islem tamamlandi! "dist" klasorune bakiniz.
pause
