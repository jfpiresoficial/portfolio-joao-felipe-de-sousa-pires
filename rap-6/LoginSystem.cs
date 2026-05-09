using System;

namespace ProjetoRap
{
    class Program
    {
        static void Main(string[] args)
        {
            string login_correto = "adm";
            string senha_correta = "1234";

            for (int i = 0; i < 3; i++)
            {
                Console.Write("Digite o usuário: ");
                string usuario = Console.ReadLine();

                Console.Write("Digite a senha: ");
                string senha = Console.ReadLine();

                if (usuario == login_correto && senha == senha_correta)
                {
                    Console.WriteLine("Bem-vindo, " + usuario);
                    break;
                }
                else
                {
                    Console.WriteLine("Acesso negado, tente novamente");
                }
            }
            
            // Se errar as 3 vezes
            Console.WriteLine("Fim da execução");
        }
    }
}
