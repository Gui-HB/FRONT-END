package POO;

public class Retangulo extends FormaGeometrica {

    public Retangulo(String cor, double medida01, double medida02) {
        super(cor, medida01);
        this.medida02 = medida02;
    }

    private double medida02;

    @Override
    public Double calcularArea() {
        // TODO Auto-generated method stub
        return getMedida01() * getMedida02();
    }

    public double getMedida02() {
        return medida02;
    }

    public void setMedida02(double medida02) {
        this.medida02 = medida02;
    }

}
