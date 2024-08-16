from fastapi import FastAPI, HTTPException
import sympy
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

@app.get("/matematica/{calculo}")
async def calcular(calculo: str):
    try:
        expr = sympy.sympify(calculo)
        result = expr.evalf()
        return {"resultado": str(result)}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Erro ao calcular a expressão: {e}")
    
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
