import { Box } from "@mui/material";
import { StyledButton, StyledButtonForm } from "../styled-components/StyledButton";
import { StyledP } from "../styled-components/StyledP";
import { StyledSpan } from "../styled-components/StyledSpan";

export function ContactForm() {

    


    return (
        <>
        <Box className="w-full sm:w-[500px] bg-white card-shadow lg:relative bottom-[350px] rounded-lg left-0 px-5 sm:px-14 py-5 sm:py-14">
            <Box>
                <StyledSpan color="#202124" fontFamily="Made Light" fontSize="1.125rem">
                    Conte-nos como podemos te ajudar?
                </StyledSpan>
                <StyledP className="mt-5" color="#707070" fontFamily="Myriad Regular" fontSize="1.125rem">
                    Preencha o formulário, entraremos em contato o quanto antes
                </StyledP>
            </Box>
            <form
            className="flex flex-col mt-10 gap-5 kwes-form"
            action="https://submit-form.com/9PrlolTc"
            >

            <Box>
                <input type="hidden" name="_feedback.language" value="pt" />

                <input 
                className='input h-[55px] w-full rounded-md p-5 border border-[#70707030] focus:border-[#006bc923]'
                type='text'
                placeholder='Nome'
                name='Nome'
                
                />
            </Box>

            <Box>
            <input
                className='input h-[55px] w-full rounded-md p-5 border border-[#70707030] focus:border-[#006bc923]'
                type='email'
                placeholder='E-mail'
                name='Email'
            />
            </Box>


            <Box>
            <input
                className='input h-[55px] w-full rounded-md p-5 border border-[#70707030] focus:border-[#006bc923]'
                type='tel'
                placeholder='Telefone'
                name='Telefone'
            />    
            </Box>

            <Box>
            <input
                className='input h-[55px] w-full rounded-md p-5 border border-[#70707030] focus:border-[#006bc923]'
                type='text'
                placeholder='Cidade'
                name='Cidade'
            />    
            </Box>

            <Box>
            <select
                className='input h-[55px] w-full rounded-md px-5 bg-transparent border border-[#70707030] focus:border-[#006bc923]'
                placeholder='Estado'
                name='Estado'
            >
            <option value="Acre">Acre</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Amapá">Amapá</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Ceará">Ceará</option>
            <option value="Espírito Santo">Espírito Santo</option>
            <option value="Goiás">Goiás</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul ">Mato Grosso do Sul </option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Pará">Pará</option>
            <option value="Paraíba">Paraíba</option>
            <option value="Paraná">Paraná</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piauí">Piauí</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina ">Santa Catarina</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
            <option value="Distrito Federal">Distrito Federal</option>

            </select>    
            </Box>

            <Box>
            <textarea
                          className='input h-[120px] w-full rounded-md p-5 bg-transparent border border-[#70707030] focus:border-[#006bc923]'
                          placeholder='Mensagem'
                          name='Mensagem'
                        />
            </Box>

            <Box className="flex w-full justify-end">
            <button className='button is-primary' type='submit'>
                <StyledButtonForm form to=''>
                    Enviar
                </StyledButtonForm>
            </button>
            </Box>
                

            </form>

           
              
        </Box>
        </>
    )
}