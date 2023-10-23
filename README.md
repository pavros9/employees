## Запуск проекта

```
npm install - установка зависомости
npm run start - запуск frontend проекта на webpack dev server
```

---

## Скрипты

-   `npm run start` - запуск frontend проекта на webpack dev server
-   `npm run build:prod` - сборка в prod режиме
-   `npm run build:dev` - сборка в dev режиме
-   `npm run lint:ts` - проверка ts файлов линтером
-   `npm run lint:ts:fix` - исправление ts файлов линтером
-   `npm run lint:scss` - проверка scss файлов style линтером
-   `npm run lint:scss:fix` - исправление scss файлов style линтером
-   `npm run prepare` - прекоммит хуки
-   `npm run server` - запуск тестового json сервера
-   `npm run unit` - запуск unit тестов с jest

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все тесты, сборка проекта и линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

## Стилизация

Использован TailwindCss с добавлением своих стилей в scss.

---

##### Запуск линтеров

-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Сущности (entities)

-   [Employee] (/src/entities/Employee)
-   [Notification] (/src/entities/Notification)

## Фичи (features)

-   [deleteEmployee] (/src/features/deleteEmployee)
-   [editableEmployeeCard] (/src/features/editableEmployeeCard)
-   [EmployeeFilterSelector] (/src/features/EmployeeFilterSelector)
-   [EmployeeSortSelector] (/src/features/EmployeeSortSelector)
