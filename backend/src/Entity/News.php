<?php
namespace  App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity()
 * @ORM\Table(name="NEWS")
 */
class News
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $nom;

    /**
     * @ORM\Column(type="string",length=1000)
     */
    protected $libelle;
    /**
     * @ORM\Column(type="string",length=255)
     */
    protected $lien;

    /**
     * @ORM\Column(type="string",length=100)
     */
    protected $image;

    /**
     * @ORM\Column(type="boolean",length=255)
     */
    protected $isVisible;

    /**
     * @ManyToOne(targetEntity="TypeNews")
     * @JoinColumn(name="typeNews_id", referencedColumnName="id")
     */
    protected $idTypeNews;

    public function getId()
    {
        return $this->id;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function getLibelle()
    {
        return $this->libelle;
    }
    public function getLien()
    {
        return $this->lien;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function getIsVisible()
    {
      return $this->isVisible;
    }

    public function getIdTypeNews()
    {
        return $this->idTypeNews;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    public function setNom($nom)
    {
        $this->nom = $nom;
        return $this;
    }
    
    public function setLibelle($libelle)
    {
        $this->libelle = $libelle;
        return $this;
    }
    public function setLien($lien)
    {
        $this->lien = $lien;
        return $this;
    }

    public function setImage($img)
    {
        $this->image = $img;
        return $this;
    }

    public function setIsVisible($isVisible)
    {
        $this->isVisible = $isVisible;
        return $this;
    }
    public function setIdTypeNews($idTypeNews){
        $this->idTypeNews = $idTypeNews;
        return $this;
    }
}
