#!/bin/sh
curl --location --request POST 'http://localhost:8080/app'
--form 'title=scriptTodoForReal' \
--form 'description=is that really gonna work?' \
--form 'due date=05 May 3210'

curl --location --request POST 'http://localhost:8080/app'
--form 'title=Jessica' \
--form 'description=Todo Jessica would be amazing' \
--form 'due date=05 May 201'
