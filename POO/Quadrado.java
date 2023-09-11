package POO;

public class Quadrado extends FormaGeometrica{

    public Quadrado(String cor, double medida01) {
        super(cor, medida01);
        
    }

    @Override
    public Double calcularArea() {
        return Math.pow(getMedida01(), 2);    
}
    
}
