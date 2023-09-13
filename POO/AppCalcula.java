package POO;

import java.util.Scanner;

public class AppCalcula {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String mensagemInicial = """
                --------------------------------------
                Cálculo rápido para formas geométricas
                --------------------------------------
                Informe qual o tipo de forma você deseja trabalhar:
                1 - Quadrado;
                2 - Retângulo;
                0 - Sair;
                """;
        System.out.println(mensagemInicial);
        int opcao = scan.nextInt();
        scan.nextLine();

        System.out.println("Digite a cor da forma");
        String cor = scan.nextLine();
        System.out.println("Digite o valor da medida 01");
        double medida01 = scan.nextDouble();
        scan.nextLine();

        scan.nextLine();
        if (opcao == 1) {
            Quadrado quadrado = new Quadrado(cor, medida01);
            System.out.println("Área:  " + quadrado.calcularArea());
        } else if (opcao == 2) {
            System.out.println("Digite o valor da medida 02");
            double medida02 = scan.nextDouble();
            Retangulo ret = new Retangulo(cor, medida01, medida02);
            System.out.println("Área:  " + ret.calcularArea());

        }
        scan.close();
    }
}
