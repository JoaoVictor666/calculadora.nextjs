from fastapi import FastAPI, HTTPException
import sympy

app = FastAPI()

@app.get("/matematica/{calculo}")
async def calcular(calculo: str):
    try:
        expr = sympy.sympify(calculo)
        result = expr.evalf()
        return {"resultado": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Erro ao calcular a expressão: {e}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
