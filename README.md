# Weather App

## Variation
Day sunny
Night clear
Day cloudy
Night cloudy
Day cloudy high
Night cloudy high
Day overcast
Night partly cloudy
Day showers
Night showers
Day rain
Night rain
Day thunderstorm
Night thunderstorm
Day snow
Night snow
Day rain mix
50 Night rain mix

## Code mocks

### List Cities
```JS
[
  {
    "nome": "Santo André",
    "id": 4703,
    "estado": "PB"
  },
  {
    "nome": "Santo André",
    "id": 4704,
    "estado": "SP"
  }
]
```

### City Forecast (6 days)
```JS
const cityCode = 4704

{
  "cidade": "Santo André",
  "estado": "SP",
  "atualizado_em": "2024-08-20",
  "clima": [
    {
      "data": "2024-08-20",
      "condicao": "pn",
      "condicao_desc": "Parcialmente Nublado",
      "min": 17,
      "max": 30,
      "indice_uv": 7
    },
    {
      "data": "2024-08-21",
      "condicao": "pn",
      "condicao_desc": "Parcialmente Nublado",
      "min": 12,
      "max": 28,
      "indice_uv": 7
    },
    {
      "data": "2024-08-22",
      "condicao": "pn",
      "condicao_desc": "Parcialmente Nublado",
      "min": 17,
      "max": 31,
      "indice_uv": 8
    },
    {
      "data": "2024-08-23",
      "condicao": "pn",
      "condicao_desc": "Parcialmente Nublado",
      "min": 15,
      "max": 31,
      "indice_uv": 8
    },
    {
      "data": "2024-08-24",
      "condicao": "c",
      "condicao_desc": "Chuva",
      "min": 12,
      "max": 20,
      "indice_uv": 7
    }
  ]
}
```

```JS
const cityCode = 765
{
  cidade: "São Bernardo do Campo",
  estado: "SP",
  atualizado_em: "2024-08-20",
  clima: [
    {
      data: "2024-08-20",
      condicao: "pn",
      condicao_desc: "Parcialmente Nublado",
      min: 17,
      max: 30,
      indice_uv: 7,
    },
    {
      data: "2024-08-21",
      condicao: "pn",
      condicao_desc: "Parcialmente Nublado",
      min: 12,
      max: 27,
      indice_uv: 7,
    },
    {
      data: "2024-08-22",
      condicao: "pn",
      condicao_desc: "Parcialmente Nublado",
      min: 17,
      max: 31,
      indice_uv: 8,
    },
    {
      data: "2024-08-23",
      condicao: "pn",
      condicao_desc: "Parcialmente Nublado",
      min: 15,
      max: 31,
      indice_uv: 8,
    },
    {
      data: "2024-08-24",
      condicao: "c",
      condicao_desc: "Chuva",
      min: 12,
      max: 20,
      indice_uv: 7,
    },
    {
      data: "2024-08-25",
      condicao: "c",
      condicao_desc: "Chuva",
      min: 10,
      max: 14,
      indice_uv: 7,
    },
  ],
};
```
