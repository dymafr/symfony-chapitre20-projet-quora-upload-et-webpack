<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Image;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $builder->getData();
        $builder
            ->add('email', null, ['label' => '*Email'])
            ->add('firstname', null, ['label' => '*Prénom'])
            ->add('lastname', null, ['label' => '*Nom'])
            ->add('pictureFile', FileType::class, [
                'label' => $user->getPicture() ? 'Image' : '*Image',
                'mapped' => false,
                'required' => !$user->getPicture(),
                'constraints' => [
                    new Image(
                        [
                            'mimeTypesMessage' => 'Veuillez soumettre une image',
                            'maxSize' => '1M',
                            'maxSizeMessage' => 'Votre image fait {{ size }} {{ suffix }}. La limite est de {{ limit }} {{ suffix }}'
                        ]
                    )
                ]
            ])
            ->add('password', PasswordType::class, ['label' => '*Mot de passe']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
