# Get Repo
## Приложение для получения списка своих репозиториев на 
##### Используемые технологии:
- React
- GraphQL
- Apollo
- GitHub API v. 4

##### Как использовать:
1. Клонируем репозиторий
> git clone https://github.com/Dissarion/get-repo.git
2. Устанавливаем пакеты
> npm install 
3. Создаем в профиле GitHub ключ для API [подробнее тут]( https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)
4. Создаем файл файл config.js в src/ и добавляем в него код
> let key = 'ваш ключ 
>export default key;
5. Далее потребуется запустить приложение, в открывшемся окне браузера будет ваш список репозиториев.
> npm run start
